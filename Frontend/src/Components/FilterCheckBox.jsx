import { Checkbox, Col, Row } from "antd";
import { Fragment, useState } from "react";

export default function FilterCheckBox({ filterDetails }) {
    let detailCount;
    const FilterDetail = ({ details }) => {
        const [showAmenities, setShowAmenities] = useState(false);
        detailCount = 0;
        return <Fragment>
            {
                details.filterTypes.map((detail) => {
                    detailCount++;
                    return <Fragment>
                        {
                            detailCount === 1 ?
                                <div>
                                    {/* <h6>{detail.title}</h6> */}
                                    <Row>
                                        {
                                            detail.options.map((option, key) =>
                                                
                                                key < 4 &&
                                                <Fragment>
                                                    {
                                                        <Col span={12}>
                                                            <Checkbox value={option}>{option}</Checkbox>
                                                        </Col>
                                                    }
                                                </Fragment>

                                            )
                                        }
                                    </Row>
                                    <div className={showAmenities ? 'showMore' : 'showLess'}>
                                        <Row>
                                            {
                                                detail.options.map((option,key) =>
                                                    key >= 4 &&
                                                    <Fragment>
                                                        {
                                                            <Col span={12}>
                                                                <Checkbox value={option}>{option}</Checkbox>
                                                            </Col>
                                                        }
                                                    </Fragment>
                                                )
                                            }
                                        </Row>
                                    </div>

                                    <Row>

                                    </Row>
                                </div> :
                                <div className={showAmenities ? 'showMore' : 'showLess'}>
                                    <h6>{detail.title}</h6>
                                    <Row>
                                        {
                                            detail.options.map((option) => {
                                                return <Col span={12}>
                                                    <Checkbox value={option}>{option}</Checkbox>
                                                </Col>
                                            })
                                        }
                                    </Row>
                                </div>
                        }

                    </Fragment>
                })
            }
            <button id='showAmenitiesBtn' onClick={() => setShowAmenities(!showAmenities)}>{!showAmenities ? 'Show more' : 'Show less'}</button>
        </Fragment>
    }
    return <Fragment>
        {
            filterDetails.map((details, key) => {
                return <Fragment key={key}>
                    <h4>{details.filterTitle}</h4>
                    <FilterDetail details={details} />
                    {
                        key !== 1 && <hr/>
                    }
                </Fragment>
            })
        }
    </Fragment>
}