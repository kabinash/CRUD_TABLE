import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Date',
    Footer: 'Date',
    accessor: 'date',
    sticky: 'left'
  },
  {
    Header: 'App_Id',
    Footer: 'App_ID',
    accessor: 'app_id',
    sticky: 'left'
  },
  {
    Header: 'Requests',
    Footer: 'Requests',
    accessor: 'requests',

  },
  {
    Header: 'Responses',
    Footer: 'Responses',
    accessor: 'responses'
  },
  {
    Header: 'Impressions',
    Footer: 'Impressions',
    accessor: 'impressions'
  },
  {
    Header: 'Clicks',
    Footer: 'Clicks',
    accessor: 'clicks'
  },
  {
    Header: 'revenue',
    Footer: 'revenue',
    accessor: 'revenue'
  },
]

