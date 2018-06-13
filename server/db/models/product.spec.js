//test routes for product model

const { expect } = require('chai')
const db = require('../index')
// const db = require('../db')
const Product = db.model('product')
// const { Product } = require('../db')

let product;

describe('Product model', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    });

    describe("The 'Product' model", function () {
        let name = "Ray";
        let description = "this is a nice shirt";
        let imageUrl = "http://pngimg.com/uploads/suit/suit_PNG8121.png";
        let season = "Summer";
        let type = "shirt";

        beforeEach(function () {
            product = Product.build({
                name, description, imageUrl, season, type
            })
        })

        afterEach(function () {
            return Product.truncate({ cascade: true })
        })
        describe("attributes definition", () => {
            it('includes `name`, `description`, `imageUrl`, `season`, `type` fields', () => {
                return product.save().then(savedProduct => {
                    expect(savedProduct.name).to.equal('Ray');
                    expect(savedProduct.description).to.equal('this is a nice shirt');
                    expect(savedProduct.imageUrl).to.equal('http://pngimg.com/uploads/suit/suit_PNG8121.png');
                    expect(savedProduct.season).to.equal('Summer');
                });
            });

            it('requires `name`', () => {
                product.name = null;
                return product.validate().then(
                    () => {
                        throw new Error('validation should fail when name is null');
                    },
                    createdError => expect(createdError).to.be.an.instanceOf(Error)
                );
            });
            it('requires `description`', () => {
                product.description = null;
                return product.validate().then(
                    () => {
                        throw new Error('validation should fail when description is null');
                    },
                    createdError => expect(createdError).to.be.an.instanceOf(Error)
                );
            });
        });
    })

})
