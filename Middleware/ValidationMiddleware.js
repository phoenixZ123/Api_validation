const validation = (schema) => async (req, res, next) => {

    try {
        await schema.validate(req.body);
        next();
    } catch (error) {
        return res.status(200).json({ error })
    }
}
export default validation;