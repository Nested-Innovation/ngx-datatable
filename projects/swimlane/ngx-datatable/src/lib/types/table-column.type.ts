import { PipeTransform } from '@angular/core';
import { ValueGetter } from '../utils/column-prop-getters';

/**
 * Column property that indicates how to retrieve this column's
 * value from a row.
 * 'a.deep.value', 'normalprop', 0 (numeric)
 */
export type TableColumnProp = string | number;

/**
 * Column Type
 */
export interface TableColumn {
  /**
   * Internal unique id
   *
   * @memberOf TableColumn
   */
  $$id?: string;

  /**
   * Internal for column width distributions
   *
   * @memberOf TableColumn
   */
  $$oldWidth?: number;

  /**
   * Internal for setColumnDefaults
   *
   * @memberOf TableColumn
   */
  $$valueGetter?: ValueGetter;

  /**
   * First Column
   *
   * @memberOf TableColumn
   */
  first?: boolean;

  /**
   * Last Column
   *
   * @memberOf TableColumn
   */
  last?: boolean;

  /**
   * Determines if column is checkbox
   *
   * @memberOf TableColumn
   */
  checkboxable?: boolean;

  /**
   * Determines if the column is frozen to the left
   *
   * @memberOf TableColumn
   */
  frozenLeft?: boolean;

  /**
   * Determines if the column is frozen to the right
   *
   * @memberOf TableColumn
   */
  frozenRight?: boolean;

  /**
   * The grow factor relative to other columns. Same as the flex-grow
   * API from http =//www.w3.org/TR/css3-flexbox/. Basically;
   * take any available extra width and distribute it proportionally
   * according to all columns' flexGrow values.
   *
   * @memberOf TableColumn
   */
  flexGrow?: number;

  /**
   * Min width of the column
   *
   * @memberOf TableColumn
   */
  minWidth?: number;

  /**
   * Max width of the column
   *
   * @memberOf TableColumn
   */
  maxWidth?: number;

  /**
   * The default width of the column, in pixels
   *
   * @memberOf TableColumn
   */
  width?: number;

  /**
   * Can the column be resized
   *
   * @memberOf TableColumn
   */
  resizeable?: boolean;

  /**
   * Custom sort comparator
   *
   * @memberOf TableColumn
   */
  comparator?: any;

  /**
   * Custom pipe transforms
   *
   * @memberOf TableColumn
   */
  pipe?: PipeTransform;

  /**
   * Can the column be sorted
   *
   * @memberOf TableColumn
   */
  sortable?: boolean;

  /**
   * Can the column be re-arranged by dragging
   *
   * @memberOf TableColumn
   */
  draggable?: boolean;

  /**
   * Whether the column can automatically resize to fill space in the table.
   *
   * @memberOf TableColumn
   */
  canAutoResize?: boolean;

  /**
   * Column name or label
   *
   * @memberOf TableColumn
   */
  name?: string;

  /**
   * Property to bind to the row. Example:
   *
   * `someField` or `some.field.nested`, 0 (numeric)
   *
   * If left blank, will use the name as camel case conversion
   *
   * @memberOf TableColumn
   */
  prop?: TableColumnProp;

  /**
   * Cell template ref
   *
   * @memberOf TableColumn
   */
  cellTemplate?: any;

  /**
   * Header template ref
   *
   * @memberOf TableColumn
   */
  headerTemplate?: any;

  /**
   * Tree toggle template ref
   *
   * @memberOf TableColumn
   */
  treeToggleTemplate?: any;

  /**
   * CSS Classes for the cell
   *
   *
   * @memberOf TableColumn
   */
  cellClass?: string | ((data: any) => string | any);

  /**
   * CSS classes for the header
   *
   *
   * @memberOf TableColumn
   */
  headerClass?: string | ((data: any) => string | any);

  /**
   * Header checkbox enabled
   *
   * @memberOf TableColumn
   */
  headerCheckboxable?: boolean;

  /**
   * Is tree displayed on this column
   *
   * @memberOf TableColumn
   */
  isTreeColumn?: boolean;

  /**
   * Width of the tree level indent
   *
   * @memberOf TableColumn
   */
  treeLevelIndent?: number;

  /**
   * Summary function
   *
   * @memberOf TableColumn
   */
  summaryFunc?: (cells: any[]) => any;

  /**
   * Summary cell template ref
   *
   * @memberOf TableColumn
   */
  summaryTemplate?: any;
}
