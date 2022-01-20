const userModel = require("../../db/module/userModel");

const getlike = async (req, res) => {
  const user = req.token.userId;
  try {
    const likeCoure = await userModel
      .findOne({ _id: user })
      .populate("LikeCoures");
    res.status(200).json(likeCoure.LikeCoures);
  } catch (error) {
    res.send(error);
  }
};

const Addlike = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const newLike = await userModel.findOneAndUpdate(
      { _id: user },
      { $push: { LikeCoures: id } },
      { new: true }
    );
    console.log({ _id: user }, { $push: { LikeCoures: id } });

    res.status(201).json(newLike);
  } catch (error) {
    res.send("error");
  }
};

const removeLike = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const newLike = await userModel.findOneAndUpdate(
      { _id: user },
      { $pull: { LikeCoures: id } },
      { new: true }
    );

    res.status(200).json(newLike);
  } catch (error) {
    res.send("error");
  }
};

module.exports = { getlike, Addlike, removeLike };
