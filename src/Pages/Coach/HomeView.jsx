import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Message } from "semantic-ui-react";
import { Paper, Divider } from "@material-ui/core";
import { useState } from "react";
import { CoachesSlide } from "./CoachesSlide";

const HomeView = (props) => {
  const [visible, setVisible] = useState(true);
  const handleDismiss = () => {
    setVisible(false);
  };
  return (
    <Paper elevation={0}>
      <Header
        style={{
          position: "static",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Header.Content style={{ position: "static" }}>
          Welcome, {(props.user && props.user.name) || ""}
        </Header.Content>
        <Header.Subheader style={{ position: "static" }}>
          This are summary of your account
        </Header.Subheader>
      </Header>
      {props.notification.length > 0 ? (
        props.notification.map((message) => (
          <Message
            key={message.id}
            info
            onDismiss={() => handleDismiss(message.id)}
            header={<h6>{message.title}</h6>}
            content={message.body}
          />
        ))
      ) : (
        <Message info>No Unread notification</Message>
      )}
      <h5>Top Rated Coaches</h5>
      <Divider className="p-1" />
      <CoachesSlide />
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  notificationError: state.general.notificationError,
  notification: state.general.notification,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
