import BadRequest from "../errors/BadRequest.js";

async function pagination(req, res, next) {
  try {
    let { limit = 5, page = 1, ordering = "_id:-1" } = req.query;

    let [ orderField, order ] = ordering.split(":");
    
    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);
    
    const result = req.results;
        
    if(limit > 0 && page > 0) {
      const paginationResult = await result.find()
        .sort({ [orderField]: order })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();
      
      res.status(200).json(paginationResult);
    } else {
      next(new BadRequest());
    }
  } catch (error) {
    next(error);
  }
}

export default pagination;