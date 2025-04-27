import User from "../models/user.model.js"
import Message from "../models/message.model.js"

export const getUsersForSideBar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id : {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers)

    } catch (err){
        console.log("Error in getUsersForSideBar controller", err.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const getMessages = async (req, res) => {
    try{
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        const messages = await Message.find({
            $or: [
                {senderId: senderId, receiverId: receiverId},
                {senderId: receiverId, receiverId: senderId},
            ]
        })

        res.status(200).json(messages)

    } catch (err){
        console.log("Error in getMessages controller", err.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const sendMessage = async (req, res) => {
    try{
        const {text, image } = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if (image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            text: text,
            image: imageUrl,
        })

        await newMessage.save();

        // todo: realtime functionality goes here => socket.io

        res.status(201).json(newMessage)


    } catch (err) {
        console.log("Error in sendMessage controller", err.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}