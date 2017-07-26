import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../redux/actions';
import { Layout, Form, Input } from '../../components';

class Dashboard extends PureComponent {
  
  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }
  
  render() {
    return (
      <Layout>
        <Form>
          <Input type="file" name="pic" accept="image/*" />
        </Form>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const actions = {
  getCurrentUser
};

const enhancedComponent = connect(mapStateToProps, actions)(Dashboard);

export { enhancedComponent as Dashboard }
