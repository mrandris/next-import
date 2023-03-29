export default function FirstPage() {
    return (
        <div className="container">
            <form
                className="needs-validation"
                noValidate
            >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-6">
                                <label className="form-label">
                                    1. Upload image
                                </label>
                                <input
                                    type="file"
                                    accept=".jpg,.jpeg,.bmp,.png,.tif"
                                    className="form-control"
                                    required
                                />
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                >
                                    Upload image
                                </button>
                            </div>
                            <div className="col-auto align-self-stretch border text-muted">
                                You'll be able to preview your image here.
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-6">
                                <label className="form-label">
                                    2. Select storage location
                                </label>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                </div>
                            </div>
                            <div className="col-auto">
                                <select className="form-select">
                                    <option value="male">Select storage type</option>
                                    <option value="male">Storage type 1</option>
                                    <option value="female">Storage type 2</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-6">
                                <label className="form-label">
                                    3. Select blockchain
                                </label>
                                <div className="d-flex flex-row">
                                    <i className="bi bi-info-circle-fill text-muted"></i>
                                    <div className="text-muted">
                                        {`
                                        For the moment we only support ETH.
                                        We'll let you know when we infiltrate in other blockchains.
                                    `}
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button
                                    type="submit"
                                    className="btn btn-outline-primary"
                                >
                                    Ethereum
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
            <div>End of page...</div>
        </div>
    )
}