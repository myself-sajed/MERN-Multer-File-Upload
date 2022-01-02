import React from 'react'
import Range from './Range'
import Required from './Required'
import Title from './Title'
import '../css/UploadDocs.css'
import { useState } from 'react'
import Axios from 'axios'

const UploadDocs = () => {

    const [selfDeclaration, setSelfDeclaration] = useState('')
    const [aadhar, setAadhar] = useState('')
    const [voter, setVoter] = useState('')
    const [itr, setItr] = useState('')
    const [disability, setDisability] = useState('')
    const [ration, setRation] = useState('')


    function uploadDocuments(e) {
        e.preventDefault();

        // let form = document.getElementById('form');
        let formData = new FormData();
        formData.append('selfDeclaration', selfDeclaration);
        formData.append('aadhar', aadhar);
        formData.append('voter', voter);
        // formData.append('itr', itr);
        // formData.append('disability', disability);
        // formData.append('ration', ration);


        Axios.post('http://localhost:4000/upload/', formData)
            .then(function (response) { console.log(response.data); })
            .catch(function (err) {
                console.log('error: ' + err.message);
            });
    }



    return (

        <>
            <Title docTitle='Home' />
            <Range title="Upload Stage" />
            <div className="pad mx-5">

                <br /><br /><br />

                <h2 className="text-center">Please upload below documents</h2>
                <hr /><br /><br />

                {/* Upload Documents section starts  */}
                <form onSubmit={uploadDocuments} id='form' encType="multipart/form-data">
                    <div className="flexme">
                        <div className="input-group mb-2 mx-5">
                            <h5>Self Declaration  <Required /></h5>
                            <div className="input-group">
                                <input type="file" name="selfDeclaration" encType="multipart/form-data" className="form-control" id="inputGroupFile02" onChange={(e) => { setSelfDeclaration(e.target.files[0]); }} required />
                            </div>
                        </div>


                        <div className="input-group mb-2 mx-5 d-flex justify-content-between align-items-center">
                            <h5>Aadhar Card  <Required /></h5>
                            <div className="input-group">
                                <input type="file" name="aadhar" className="form-control" id="inputGroupFile02" onChange={(e) => { setAadhar(e.target.files[0]); }} required />
                            </div>
                        </div>
                    </div>

                    <br /><br />

                    <div className="flexme">
                        <div className="input-group mb-2 mx-5 ">
                            <h5>Voter Card  <Required /></h5>
                            <div className="input-group">
                                <input type="file" name="voter" className="form-control" id="inputGroupFile02" encType="multipart/form-data" onChange={(e) => { setVoter(e.target.files[0]); }} required />
                            </div>
                        </div>
                        <br /><br />
                        <div className="input-group mb-2 mx-5 ">
                            <h5>ITR  (if applicable)</h5>
                            <div className="input-group">
                                <input type="file" className="form-control" id="inputGroupFile02" encType="multipart/form-data" onChange={(e) => { setItr(e.target.value); }} />
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div className="flexme">
                        <div className="input-group mb-2 mx-5">
                            <h5>Disability Certificate  (if applicable)</h5>
                            <div className="input-group">
                                <input type="file" className="form-control" id="inputGroupFile02" encType="multipart/form-data" value={disability} onChange={(e) => { setDisability(e.target.value); }} />
                            </div>
                        </div>
                        <br /><br />
                        <div className="input-group mb-2 mx-5">
                            <h5>Ration Card  (if applicable)</h5>
                            <div className="input-group">
                                <input type="file" className="form-control" id="inputGroupFile02" encType="multipart/form-data" value={ration} onChange={(e) => { setRation(e.target.value); }} />
                            </div>
                        </div>
                    </div>

                    <br /><br />
                    {/* Upload Documents section ends  */}

                    <hr />

                    {/* Submit Button */}
                    <div className="col-md-8 text-center">
                        <button className="btn btn-primary" type="submit">Upload and Proceed to Payment</button>
                    </div>

                </form >



                <br /><br /><br /><br />
            </div >
        </>
    )
}

export default UploadDocs
