import logger from '../utils/logger.js';

const getAuth = (req, res) => {
    res.json({ message: "Server is running successfully!" });
};

const postAuth = (req, res) => {
    let name = req.body.name || "Unknown";
    res.json({ message: `Hello ${name}! We received your post request!` })
};

export { getAuth, postAuth };
