const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

chai.use(chaiHttp);
chai.should();


    describe('get product orders', () => {
      
        it("it should be getting product orders ", (done) => {
            const id = 1;
            chai
              .request(app)
              .get(`/orders/${id}`)
              .end((err, res) => {
                res.should.have.status(200);
                done();
              });
          });
    });

    describe('get all product orders', () => {
      
        it("It should GET all the product orders", (done) => {
            chai
              .request(app)
              .get("/orders")
              .end((err, res) => {
                res.should.have.status(200);
                done();
              });

            });
    });

    describe('create a product order', () => {
        it("it should be creating product orders", (done) => {
            let order = {
                
                customer: {
                  id: 6,
                  
                },
                product: {
                  id: 3,
                  
                },
                productQuantity: 1
            };
        
            chai
              .request(app)
              .post("/orders")
              .send(order)
              .end((err, res) => {
                res.should.have.status(200);
                done();
              });
          });
    });

    describe('update a product order', () => {

        it("it should be updating product orders", (done) => {
            const id = 3;
            let order = {
                orderId: id,
                customer: {
                  id: 7,
                
                },
                product: {
                  id: 2,
                 
                },
                productQuantity: 3
            };
        
            chai
              .request(app)
              .put("/orders/" + id)
              .send(order)
              .end((err, res) => {
                res.should.have.status(200);
                done();
              });
          });
      
    });

    describe('delete a product order', () => {

        it("It should DELETE product order by id", (done) => {
            const id = 3;
            chai
              .request(app)
              .delete("/orders/" + id)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
              });
          });
        
    });
  

