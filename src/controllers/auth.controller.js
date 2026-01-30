import logger from '../utils/logger.js';

const getRoot = (req, res) => {
    res.json({ message: "Server is running successfully!" });
};

const postRoot = (req, res) => {
    let name = req.body.name || "Unknown";
    res.json({ message: `Hello ${name}! We received your post request!` })
};

export { getRoot, postRoot };
