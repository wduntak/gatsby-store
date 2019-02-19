import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Button extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe(
      'pk_test_yEgiy0awqCO4Udm4kkrvT5oP',
      {
        betas: ['checkout_beta_4']
      }
    );
  }

  redirectToCheckout(e) {
    e.preventDefault();
    this.stripe.redirectToCheckout({
      items: [{sku: 'sku_EYgr1YfwMUXCKZ', quantity: 1}],

      // Note that it is not guaranteed your customers will be redirected to this
      // URL *100%* of the time, it's possible that they could e.g. close the
      // tab between form submission and the redirect.
      successUrl: 'http://localhost:8000/success',
      cancelUrl: 'https://localhost:8000/canceled',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.redirectToCheckout(event)}>
        <button type="submit">Buy Husky</button>
      </form>
    );
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>You bought a husky!</h1>
  </Layout>
)

export default IndexPage
