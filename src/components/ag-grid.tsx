'use client';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import {
  type ColDef,
  type GetRowIdFunc,
  type GetRowIdParams,
  type ValueFormatterFunc,
  type ValueGetterParams,
} from '@ag-grid-community/core';
import { ModuleRegistry } from '@ag-grid-community/core';

import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { AdvancedFilterModule } from '@ag-grid-enterprise/advanced-filter';
import { GridChartsModule } from '@ag-grid-enterprise/charts-enterprise';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { SparklinesModule } from '@ag-grid-enterprise/sparklines';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import React, { useCallback, useMemo, useRef, useState } from 'react';

import { getData } from '@/components/fake-data';
import { AgGridReact } from '@ag-grid-community/react';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  AdvancedFilterModule,
  ColumnsToolPanelModule,
  ExcelExportModule,
  FiltersToolPanelModule,
  GridChartsModule,
  MenuModule,
  RangeSelectionModule,
  RowGroupingModule,
  SetFilterModule,
  RichSelectModule,
  StatusBarModule,
  SparklinesModule,
]);

const numberFormatter: ValueFormatterFunc = ({ value }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 2,
  });
  return value === null ? '' : formatter.format(value);
};

export default function AgGrid({ gridTheme = 'ag-theme-quartz' }) {
  const [rowData, setRowData] = useState(getData());
  const gridRef = useRef<AgGridReact>(null);

  const colDefs = useMemo<ColDef[]>(
    () => [
      {
        field: 'ticker',
        cellRenderer: 'agGroupCellRenderer',
        minWidth: 380,
        editable: true,
      },
      {
        field: 'instrument',
        cellDataType: 'text',
        type: 'rightAligned',
        maxWidth: 180,
        editable: true,
      },
      {
        headerName: 'P&L',
        cellDataType: 'number',
        type: 'rightAligned',
        editable: true,
        cellRenderer: 'agAnimateShowChangeCellRenderer',
        valueGetter: ({ data }: ValueGetterParams) =>
          data && data.quantity * (data.price / data.purchasePrice),
        valueFormatter: numberFormatter,
        aggFunc: 'sum',
      },
      {
        headerName: 'Total Value',
        type: 'rightAligned',
        cellDataType: 'number',
        editable: true,
        valueGetter: ({ data }: ValueGetterParams) =>
          data && data.quantity * data.price,
        cellRenderer: 'agAnimateShowChangeCellRenderer',
        valueFormatter: numberFormatter,
        aggFunc: 'sum',
      },
      {
        field: 'quantity',
        cellDataType: 'number',
        type: 'rightAligned',
        editable: true,
        valueFormatter: numberFormatter,
        maxWidth: 150,
      },
      {
        headerName: 'Price',
        field: 'purchasePrice',
        cellDataType: 'number',
        type: 'rightAligned',
        editable: true,
        valueFormatter: numberFormatter,
        maxWidth: 150,
      },
      {
        field: 'purchaseDate',
        cellDataType: 'dateString',
        type: 'rightAligned',
        editable: true,
        hide: true,
      },
      {
        headerName: 'Last 24hrs',
        field: 'last24',
        cellRenderer: 'agSparklineCellRenderer',
        editable: true,
        cellRendererParams: {
          sparklineOptions: {
            line: {
              strokeWidth: 2,
            },
          },
        },
      },
    ],
    []
  );

  const defaultColDef: ColDef = useMemo(
    () => ({
      flex: 1,
      filter: true,
      enableRowGroup: true,
      enableValue: true,
    }),
    []
  );

  const getRowId = useCallback<GetRowIdFunc>(
    ({ data: { ticker } }: GetRowIdParams) => ticker,
    []
  );

  const statusBar = useMemo(
    () => ({
      statusPanels: [
        { statusPanel: 'agTotalAndFilteredRowCountComponent' },
        { statusPanel: 'agTotalRowCountComponent' },
        { statusPanel: 'agFilteredRowCountComponent' },
        { statusPanel: 'agSelectedRowCountComponent' },
        { statusPanel: 'agAggregationComponent' },
      ],
    }),
    []
  );

  return (
    <div className={gridTheme} style={{ height: '100vh', width: '100vw' }}>
      <AgGridReact
        ref={gridRef}
        getRowId={getRowId}
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        enableRangeSelection
        enableCharts
        rowSelection={'multiple'}
        rowGroupPanelShow={'always'}
        suppressAggFuncInHeader
        groupDefaultExpanded={-1}
        statusBar={statusBar}
      />
    </div>
  );
}
