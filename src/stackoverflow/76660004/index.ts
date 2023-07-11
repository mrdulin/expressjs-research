import Joi from 'joi';

const mySchema = {
	my_obj: Joi.object().keys({
		id: Joi.number().positive().required(),
		sort: Joi.string()
			.lowercase()
			.default('desc')
			.custom((value) => {
				switch (value) {
					case 'desc':
						return -1;
					case 'asc':
						return 1;
				}
			}),
	}),
};

const obj = {
	my_obj: {
		id: 1,
		sort: 'desc',
	},
};

const { value, error } = mySchema.my_obj.validate(obj.my_obj);

console.log(value);
