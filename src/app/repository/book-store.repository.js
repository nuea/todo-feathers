const repositories = {};
const { GeneralError, NotFound, BadRequest, PaymentError } = require("@feathersjs/errors")

exports.BookStoreRepository = class BookStoreRepository {
    async getBookById (id) {
        return await tthis.Model.findById({_id: id}).catch(err => {
            throw GeneralError(err)
        })
    }
}