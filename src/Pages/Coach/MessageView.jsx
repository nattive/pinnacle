import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DataGrid } from 'tubular-react';
import {createColumn} from "tubular-common";

const columns = [createColumn('From'), createColumn('Subject'), createColumn('Date')];

 const MessageView = () => {
  return (
    <DataGrid
      columns={columns}
      dataSource={"https://tubular.azurewebsites.net/api/orders/paged"}
      gridName="Grid"
    />
  );
};

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageView);
