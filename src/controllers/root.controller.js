const getRoot = (req, res) => {
    return res.json({ message: "Welcome to the API! It is still under development, but at least it's up and running! :)" })
}

export { getRoot }