import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import ApiError from "../types/apiError.js";
import { MatchModel, NewsModel, PositionModel } from "../../database/models/model.js";
/**
 * @desc Get All News
 * @route /api/news/
 * @method GET
 * @access public
 */
export const getAllNews = asyncHandler(async (req, res, next) => {
    const news = await NewsModel.find();
    const rs = news.map(n => n.toObject());
    return res.status(200).json(rs);
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
/**
 * @desc getPosition
 * @route /api/position/
 * @method GET
 * @access public
 */
export const getPosition = asyncHandler(async (req, res, next) => {
    const rs = await PositionModel.find().populate('team').sort({ totalScore: -1 });
    return res.status(201).json(rs);
});
/**
 * @desc getAllMatches
 * @route /api/matches/
 * @method GET
 * @access public
 */
export const getAllMatches = asyncHandler(async (req, res, next) => {
    const rs = await MatchModel.find().populate('away local');
    return res.status(201).json(rs);
});
/**
 * @desc get5MatchesOfTeam
 * @route /api/matches/:id
 * @method GET
 * @access public
 */
export const get5MatchesOfTeam = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const rs = await MatchModel.find({
        $or: [
            { 'local': id },
            { 'away': id },
        ]
    }).populate('away local').sort({ 'date': -1 }).limit(5);
    return res.status(200).json(rs);
});
//# sourceMappingURL=mainController.js.map