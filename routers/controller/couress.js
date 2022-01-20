const couress = require("../../db/module/coursesModel");
const userModel = require("../../db/module/userModel");

//  هنا فنكشن الترجيع
const getCoures = async (req, res) => {
  try {
    const coures = await couress.find({}).populate("user");
    res.status(200).json(coures);
  } catch (error) {
    res.send(error);
  }
};

const getCouresbyID = async (req, res) => {
  const { id } = req.params;
  try {
    const getbyId = await couress.findOne({ _id: id }).populate("vedios");
    res.status(200).json(getbyId);
  } catch (err) {
    res.send(err);
  }
};

// هنا فنكشن الاضافه

const AddCoures = async (req, res) => {
  const { name, Description, img, vedio } = req.body;
  console.log({ name, Description, img, vedio });
  const user = req.token.userId;
  try {
    const useradmin = await userModel.findOne({ _id: user });
    if (useradmin.admin == true) {
      const newCouers = new couress({ name, Description, vedio, img, user });

      const respnse = await newCouers.save();

      const coers = await couress.find({});
      res.status(200).json(coers);
    } else {
      res.send("Your not admin");
    }
    console.log(coers);
  } catch (error) {
    res.send(error);
  }
};
const AddVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { vedio } = req.body;
    const user = req.token.userId;
    const useradmin = await userModel.findOne({ _id: user });
    if (useradmin.admin == true) {
      const addVed = await couress.findByIdAndUpdate(
        { _id: id },
        { $push: { vedios: vedio } },
        { new: true }
      );
      res.status(201).json(addVed);
    } else {
      res.send("your not admin");
    }
  } catch (err) {
    res.send(err);
  }
};

// حذف بالاييندكس
// const { id , i } = req.params;
// console.log(i,id);

// const courser = await couress.findOne({_id:id})
// const arr = courser.vedios
// arr.splice(i,1)
// let response = await couress.findOneAndUpdate({_id:id} ,{vedios:arr}, {new:true})
// res.send(response)

const delVideo = async (req, res) => {
  try {
    const { id, ele } = req.params;
    console.log(id, ele);
    const user = req.token.userId;
    //findOne بالايدي لان الايدي مستحيل يتكرر
    const useradmin = await userModel.findOne({ _id: user });
    if (useradmin.admin == true) {
      const delVed = await couress.findByIdAndUpdate(
        { _id: id },
        { $pull: { vedios: ele } },
        { new: true }
      );
      res.status(200).json(delVed);
    } else {
      res.send("your not adimn");
    }
  } catch (err) {
    res.send(err);
  }
};
// هنا فنكشن الحذف

const deleteCoures = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;

  try {
    const useradmin = await userModel.findOne({ _id: user });
    if (useradmin.admin == true) {
      const del = await couress.findOneAndDelete({ _id: id });
      const coers = await couress.find({});
      res.status(201).json(coers);
    } else {
      res.send("your not admin");
    }
  } catch (error) {
    res.send(error);
  }
};
const putCouresbyID = async (req, res) => {
  let { Description, img } = req.body;
  const { id } = req.params;
  console.log(id);
  const user = req.token.userId;
  console.log(user);
  try {
    const useradmin = await userModel.findOne({ _id: user });
    if (useradmin.admin == true) {
      const updacours = await couress.findByIdAndUpdate(
        { _id: id, user: user },
        { Description, img },
        { new: true }
      );
      console.log(updacours);
      const coers = await couress.find({});
      res.status(200).json(coers);
    } else {
      res.send("your not adain");
    }
    console.log(coers);
  } catch (error) {
    res.send(error);
  }
};

const addcomment = async (req, res) => {
  const { comment, img } = req.body;
  const { id } = req.params;
  const user = req.token.userId;
  const usename = req.token.userName;
  console.log(id, user, usename, comment, img);
  try {
    const addcoment = await couress
      .findOneAndUpdate(
        { _id: id },
        { $push: { comment: { comment, usename, img } } },
        { new: true }
      )
      .populate("user");

    res.status(201).json(addcoment);
    console.log(addcoment);
  } catch (error) {
    res.send(error);
  }
};

const delcomment = async (req, res) => {
  const { comment } = req.body;
  const id = req.params.id;
  const user = req.token.userId;
  const usename = req.token.userName;
  console.log(id, user, usename, comment);
  try {
    const delcoment = await couress
      .findOneAndUpdate(
        { _id: id },
        { $pull: { comment: { comment, usename } } },
        { new: true }
      )
      .populate("user");

    res.status(201).json(delcoment);
    console.log(delcoment);
  } catch (error) {
    res.send(error);
  }
};

const getcomment = async (req, res) => {
  const id = req.params.id;
  const getcomm = await couress.find({ _id: id });
  res.status(200).json(getcomm);
};
module.exports = {
  AddCoures,
  getCoures,
  deleteCoures,
  AddVideo,
  getCouresbyID,
  putCouresbyID,
  delVideo,
  addcomment,
  getcomment,
  delcomment,
};
