import React from 'react';
import { Redirect } from 'react-router-dom'
import history from '../../utils/history';
import PropTypes from 'prop-types';
import {API_URL} from '../../config/config';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import CustomizedSnackbar from '../common/snakebar/CustomizedSnackbar';

import MaterialTable from "material-table";
import {httpBase} from '../../utils/httpBaseUtil';

import { forwardRef } from 'react';

import icoClientAdd from '@material-ui/icons/PersonAddSharp';
import icoClientEdit from '@material-ui/icons/EditSharp';
import icoClientDelete from '@material-ui/icons/DeleteSharp';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/Search';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const styles = theme => ({
    root: {
        paddingTop: 0
    }
});

import Button from '@material-ui/core/Button';

const Client = props => {
    const [open, setOpen] = React.useState(false);

    const [sbMsg, setsbMsg] = React.useState("Temporary Message");
    const [sbVar, setsbVar] = React.useState("success");

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    
    return (
        <div>
            <CustomizedSnackbar
              isOpen= {open}
              handleClose={handleClose}
              snagText= {sbMsg}
              snagVariant= {sbVar}
            />
            <Paper>
                <MaterialTable
                    icons={tableIcons}
                    columns={[
                        { title: 'ID', field: 'id', type: 'numeric', filterPlaceholder: 'type here',
                          cellStyle: {
                            width: 100,
                            maxWidth: 100,
                            textAlign: 'left'
                          },
                          headerStyle: {
                            textAlign: 'left'
                          } 
                        },
                        { title: 'First Name', field: 'first_name', filterPlaceholder: 'type here' },
                        { title: 'Middle Name', field: 'middle_name', filterPlaceholder: 'type here' },
                        { title: 'Last Name', field: 'last_name', filterPlaceholder: 'type here' },
                        { title: 'Email Address', field: 'email', filterPlaceholder: 'type here' }
                    ]}
                    data={query =>
                        new Promise((resolve, reject) => {
                          query.page = query.page + 1
                          let url = API_URL+'clients/query?'
                          url += 'query=' + JSON.stringify(query)
                        //   url += 'per_page=' + query.pageSize
                        //   url += '&page=' + (query.page + 1)
                        
                          fetch(url)
                            .then(response => response.json())
                            .then(result => {
                                console.log(result);
                              resolve({
                                data: result.data,
                                page: result.page - 1,
                                totalCount: result.totalCount,
                              })
                            })
                        })
                    }
                    title="Clients List"
                    options={{
                        filtering: true,
                        pageSize: 10,
                        pageSizeOptions: [10, 25, 50, 100],
                        search: false,
                        columnsButton:true,
                        debounceInterval:1000,
                        actionsColumnIndex: -1
                      }}
                    // onChangePage={(page) => 
                    //     console.log("Next Page: "+page)
                    // }
                    actions={[
                      {
                        icon: icoClientAdd,
                        tooltip: 'Add Client',
                        isFreeAction: true,
                        onClick: (event) => history.push("/clients/add")
                      },
                      {
                        icon: icoClientEdit,
                        tooltip: 'Edit Client',
                        color: "#ee434b",
                        onClick: (event, rowData) => history.push("/clients/Edit/"+rowData.id)
                      },
                      // rowData => ({
                      //   icon: icoClientDelete,
                      //   tooltip: 'Delete Client',
                      //   onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                      //   // disabled: rowData.birthYear < 2000
                      // })
                    ]}

                    editable={{
                      onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                              
                          httpBase().delete('clients/'+oldData.id)
                            .then((response) => {
                              setsbMsg('Client deleted successfully.');
                              setsbVar('success');
                              setOpen(true);

                              resolve()
                            })
                            .catch((error) => {
                              setsbMsg('Sorry, there is any problem while deleting client.');
                              setsbVar('error');
                              setOpen(true);
                              reject()
                            });
                        }),
                    }}

                    localization= {{
                      body:{
                        editRow:{
                          deleteText : 'Are you sure you want to delete this client?'
                        }
                      }
                    }}
                />
            </Paper>
        </div>
    );
};

export default withStyles(styles)(Client);