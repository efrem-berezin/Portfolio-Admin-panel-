import "./datatable.scss"

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../components/datatable/datatablesource"


const Datatable = () => {
    return(
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns}
                initialState={{
                    pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable