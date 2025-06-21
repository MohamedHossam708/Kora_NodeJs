import { Types } from 'mongoose';

export const isValidObjectId = (value, helper) => {
    if (Types.ObjectId.isValid(value)) return true;
    return helper.message("invalid objectId");
};

export const validation = (schema) => {
    return async (req, res, next) => {
        try {
            const data = { ...req.body, ...req.params, ...req.query };
            await schema.validate(data, { abortEarly: false });
            return next();
        } catch (error) {
            if (error.name === 'ValidationError') {
                const errorMessages = error.errors.join(', ');
                return next(new Error(errorMessages));
            }

            return next(error); // pass any other errors
        }
    };
};

