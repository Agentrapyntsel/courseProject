import React from "react";
import {RouteComponentProps} from 'react-router-dom';

import './NotFound.scss';

 export const  NotFound: React.FunctionComponent<RouteComponentProps> = ({history}) => {

    const goHome = () => {
        history.push('/');
    }

    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="content_box_404">
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>
                                <p>the page you are looking for not available!</p>
                                <button className="link_404" onClick = {goHome}>Go home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

