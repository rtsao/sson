// @flow

type DisplayValue
  = 'none'
  | 'block'
  | 'inline';

/**
 * CSS properties that cascade also support these
 * https://drafts.csswg.org/css-cascade/#defaulting-keywords
 */
type CSSGlobalValue
  = 'initial'
  | 'inherit'
  | 'unset' // combination of `initial` and `inherit`
  | 'revert';

type TransformValue =
    {translateX: number | string}
  | {translateY: number | string}
  | {rotate3d: number | string};

type DirectionalValue = {|
  top?: number | string,
  right?: number | string,
  bottom?: number | string,
  left?: number | string
|};

type BorderValue = {|
  color?: number | string | DirectionalValue,
  style?: number | string | DirectionalValue,
  width?: number | string | DirectionalValue,
  radius?: number | string | DirectionalValue,
|};

type BackgroundPositionValue
  = 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'center'
  | [string, string];

type BackgroundAttachmentValue
  = 'scroll'
  | 'fixed'
  | 'local';

type BackgroundClipValue
  = 'border-box'
  | 'padding-box'
  | 'content-box'
  | 'text';


type BackgroundOriginValue
  = 'border-box'
  | 'padding-box'
  | 'content-box';

type BackgroundRepeatBaseValue
  = 'repeat'
  | 'space'
  | 'round'
  | 'no-repeat';


// TODO: make this a generic type
type BackgroundRepeatValue = {|
  x?: BackgroundRepeatBaseValue | CSSGlobalValue,
  y?: BackgroundRepeatBaseValue | CSSGlobalValue
|};

type BackgroundValue = {|
  image?: string,
  position?: BackgroundPositionValue, // TODO position-x, position-y
  size?: string,
  repeat?: BackgroundRepeatValue,
  origin?: BackgroundOriginValue | CSSGlobalValue,
  clip?: BackgroundClipValue | CSSGlobalValue,
  attachment?: BackgroundAttachmentValue | CSSGlobalValue,
  color?: string
|};

type DeclarationObj = {|
  // TODO: do we allow global value here (shorthand)?
  background?: BackgroundValue,
  border?: BorderValue | CSSGlobalValue,
  color?: string | CSSGlobalValue,
  display?: DisplayValue | CSSGlobalValue,
  transform?: TransformValue | Array<TransformValue> | CSSGlobalValue,
|};

const foo:DeclarationObj = {
  display: 'none',
  color: 'red',
  transform: [
    {translateX: 20}
  ],
  background: {color: 'blue'},
  border: {color: {left: 'red'}}
};
