import React from 'react';

import Title from '../Title.jsx';
import ProgressIndicator from '../ProgressIndicator.jsx';
import Navigation from '../Navigation.jsx';

import {ALL_PAGES, PAGES} from 'src/constants';

export default class MobileWrapper extends React.Component {

    render() {

        const isPaymentMethodsControl =  this.props.paymentMethods.indexOf("CARD") >= 0 && this.props.paymentMethods.length == 1;

        if (isPaymentMethodsControl)
            return this.renderInForm(ALL_PAGES);
        else
        if (this.props.page == PAGES.CONTRIBUTION)
            return this.renderInForm([PAGES.CONTRIBUTION]);
        else
            return this.renderInForm([PAGES.DETAILS, PAGES.PAYMENT]);

    }

    renderInForm(pages) {

        return <form className={'flex-vertical contribute-form__inner'} onSubmit={this.props.submit.bind(this)}>
            {pages.map(p =>
                <section className="contribute-section" key={p}>

                    <div className="contribute-form__heading">
                        <Title page={p}/>
                        <ProgressIndicator page={this.props.page}/>
                    </div>

                    {this.props.componentFor(p)}

                    <Navigation
                        page={p}
                        goBack={this.props.goBack}
                        amount={this.props.card.amount}
                        currency={this.props.currency}
                        processing={this.props.processing}
                        pay={this.props.pay}
                        payWithPaypal={this.props.payWithPaypal}
                        payWithCard={this.props.payWithCard}
                        jumpToFirstPage={this.props.jumpToFirstPage}
                        paymentMethods={this.props.paymentMethods}
                        mobile={true}/>


                </section>
            )}
        </form>;
    }
}



