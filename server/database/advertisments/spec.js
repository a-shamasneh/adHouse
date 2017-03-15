const app = require('../../../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('adverts', function () {
  it('Should create a new Adv', function (done) {
    request(app)
        .post('/api/addserv')
        .send([{
        	    "ad_cat":"jobs",
    			"ad_loc":"Amman",
			    "ad_desc":"looking for Software Engeneering ",
			    "ad_img":"data:image/png;base64",
			    "ad_date":Date.now,
			    "ad_approve":"false",
			    "ad_phone":"078140502",
			    "ad_uid":"58be8427ffc31d080b8334b5"
        }
              ])
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        expect(resp.body).to.be.an('string')
        done()
      })
  })
    it('Should retrive all advertisments ', function (done) {
    request(app)
        .get('/api/adds/getall')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        expect(resp.body).to.be.an('array')
        done()
      })
  })

})
