import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import ApiError from "../types/apiError.js";
import { NewsModel } from "../../database/models/model.js";
/**
 * @desc Get All News
 * @route /api/news/
 * @method GET
 * @access public
 */
export const getAllNews = asyncHandler(async (req, res, next) => {
    let news = await NewsModel.find();
    news = news.map(n => n.toObject());
    return res.status(200).json(news);
});
/**
 * @desc Get news by ID
 * @route /api/news/:id
 * @method GET
 * @access public
 */
export const getNewsById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    if (!id)
        throw new ApiError(400, "ID is not defined");
    const news = await NewsModel.findById(id);
    return res.status(200).json(news?.toObject());
});
/**
 * @desc CreateNews
 * @route /api/news/
 * @method POST
 * @access public
 */
export const createNews = asyncHandler(async (req, res, next) => {
    const data = req.body;
    if (!data)
        throw new ApiError(400, "data empty");
    let news = new NewsModel({ ...data });
    news = await news.save();
    return res.status(201).json(news);
});
//# sourceMappingURL=mainController.js.map