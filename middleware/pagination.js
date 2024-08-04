export const paginateData = (model) => async (req, res, next) => {
  try {
    if (!req.query.page || !req.query.limit) {
      return next();
    }
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const data = await model.find().skip(skip).limit(limit).exec();
    const totalItems = await model.countDocuments().exec();
    const totalPages = Math.ceil(totalItems / limit);
    if (page > totalPages) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found" });
    }
    req.paginatedItems = {
      data,
      totalItems,
      totalPages,
    };
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Error" });
  }
};
