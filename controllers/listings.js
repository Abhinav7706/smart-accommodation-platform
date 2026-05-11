const Listing = require("../models/listing");
const axios = require("axios"); // npm install axios

module.exports.index = async (req, res) => {

  let filter = {};

  // Category filter
  if(req.query.category){
    filter.category = req.query.category;
  }

  const allListing = await Listing.find(filter);

  res.render("listings/index.ejs", { allListing });
};



module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author", select: "username" },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing,
    mapToken:process.env.MAP_TOKEN,

   });
};



module.exports.createListing = async (req, res) => {

  const { location, country } = req.body.listing;

  // Geocoding
  const geoRes = await axios.get(
    `https://api.maptiler.com/geocoding/${encodeURIComponent(
      location + ", " + country
    )}.json?key=${process.env.MAP_TOKEN}`
  );

  const coords =
    geoRes.data.features[0]?.geometry?.coordinates || [0, 0];

  // Cloudinary image
  let url = req.file.path;
  let filename = req.file.filename;

  // Create listing
  const newListing = new Listing({
    ...req.body.listing,
    owner: req.user._id,

    image: {
      url,
      filename,
    },

    geometry: {
      type: "Point",
      coordinates: coords,
    },
  });

  await newListing.save();

  req.flash("success", "New listing created successfully");

  res.redirect("/listings");
};




module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist");
    return res.redirect("/listings");
  }
  let originalImageUrl=listing.image.url;
   originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250")

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
   let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing });
   if(typeof req.file != "undefined"){
   let url = req.file.path;
  let filename = req.file.filename;
  listing.image={url,filename}
  await listing.save();
  }
  req.flash("success", "Listing updated successfully");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedlist = await Listing.findByIdAndDelete(id);
 
  req.flash("success", "Listing deleted");
  res.redirect("/listings");
};

module.exports.searchListing = async (req, res) => {

    let { location } = req.query;

    const allListing = await Listing.find({
        $or: [
            { location: { $regex: location, $options: "i" } },
            { country: { $regex: location, $options: "i" } }
        ]
    });

    res.render("listings/index.ejs", { allListing });

};