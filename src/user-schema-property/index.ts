// https://www.terraform.io/docs/providers/okta/r/user_schema_property
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserSchemaPropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom Subschema enumerated value of a property of type array.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#array_enum UserSchemaProperty#array_enum}
  */
  readonly arrayEnum?: string[];
  /**
  * Subschema array type: string, number, integer, reference. Type field must be an array.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#array_type UserSchemaProperty#array_type}
  */
  readonly arrayType?: string;
  /**
  * Custom Subschema description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#description UserSchemaProperty#description}
  */
  readonly description?: string;
  /**
  * Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#enum UserSchemaProperty#enum}
  */
  readonly enum?: string[];
  /**
  * Subschema external name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#external_name UserSchemaProperty#external_name}
  */
  readonly externalName?: string;
  /**
  * Subschema external namespace
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#external_namespace UserSchemaProperty#external_namespace}
  */
  readonly externalNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#id UserSchemaProperty#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Subschema unique string identifier
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#index UserSchemaProperty#index}
  */
  readonly index: string;
  /**
  * SubSchema profile manager, if not set it will inherit its setting.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#master UserSchemaProperty#master}
  */
  readonly master?: string;
  /**
  * Subschema of type string maximum length
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#max_length UserSchemaProperty#max_length}
  */
  readonly maxLength?: number;
  /**
  * Subschema of type string minimum length
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#min_length UserSchemaProperty#min_length}
  */
  readonly minLength?: number;
  /**
  * The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#pattern UserSchemaProperty#pattern}
  */
  readonly pattern?: string;
  /**
  * SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#permissions UserSchemaProperty#permissions}
  */
  readonly permissions?: string;
  /**
  * Whether the subschema is required
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#required UserSchemaProperty#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#scope UserSchemaProperty#scope}
  */
  readonly scope?: string;
  /**
  * Subschema title (display name)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#title UserSchemaProperty#title}
  */
  readonly title: string;
  /**
  * Subschema type: string, boolean, number, integer, array, or object
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#type UserSchemaProperty#type}
  */
  readonly type: string;
  /**
  * Subschema unique restriction
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#unique UserSchemaProperty#unique}
  */
  readonly unique?: string;
  /**
  * Custom subschema user type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#user_type UserSchemaProperty#user_type}
  */
  readonly userType?: string;
  /**
  * array_one_of block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#array_one_of UserSchemaProperty#array_one_of}
  */
  readonly arrayOneOf?: UserSchemaPropertyArrayOneOf[] | cdktf.IResolvable;
  /**
  * master_override_priority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#master_override_priority UserSchemaProperty#master_override_priority}
  */
  readonly masterOverridePriority?: UserSchemaPropertyMasterOverridePriority[] | cdktf.IResolvable;
  /**
  * one_of block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#one_of UserSchemaProperty#one_of}
  */
  readonly oneOf?: UserSchemaPropertyOneOf[] | cdktf.IResolvable;
}
export interface UserSchemaPropertyArrayOneOf {
  /**
  * Enum value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#const UserSchemaProperty#const}
  */
  readonly const: string;
  /**
  * Enum title
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#title UserSchemaProperty#title}
  */
  readonly title: string;
}

export function userSchemaPropertyArrayOneOfToTerraform(struct?: UserSchemaPropertyArrayOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    const: cdktf.stringToTerraform(struct!.const),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class UserSchemaPropertyArrayOneOfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserSchemaPropertyArrayOneOf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._const !== undefined) {
      hasAnyValues = true;
      internalValueResult.const = this._const;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSchemaPropertyArrayOneOf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._const = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._const = value.const;
      this._title = value.title;
    }
  }

  // const - computed: false, optional: false, required: true
  private _const?: string; 
  public get const() {
    return this.getStringAttribute('const');
  }
  public set const(value: string) {
    this._const = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constInput() {
    return this._const;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class UserSchemaPropertyArrayOneOfList extends cdktf.ComplexList {
  public internalValue? : UserSchemaPropertyArrayOneOf[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): UserSchemaPropertyArrayOneOfOutputReference {
    return new UserSchemaPropertyArrayOneOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSchemaPropertyMasterOverridePriority {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#type UserSchemaProperty#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#value UserSchemaProperty#value}
  */
  readonly value: string;
}

export function userSchemaPropertyMasterOverridePriorityToTerraform(struct?: UserSchemaPropertyMasterOverridePriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class UserSchemaPropertyMasterOverridePriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserSchemaPropertyMasterOverridePriority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSchemaPropertyMasterOverridePriority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserSchemaPropertyMasterOverridePriorityList extends cdktf.ComplexList {
  public internalValue? : UserSchemaPropertyMasterOverridePriority[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): UserSchemaPropertyMasterOverridePriorityOutputReference {
    return new UserSchemaPropertyMasterOverridePriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSchemaPropertyOneOf {
  /**
  * Enum value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#const UserSchemaProperty#const}
  */
  readonly const: string;
  /**
  * Enum title
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property#title UserSchemaProperty#title}
  */
  readonly title: string;
}

export function userSchemaPropertyOneOfToTerraform(struct?: UserSchemaPropertyOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    const: cdktf.stringToTerraform(struct!.const),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class UserSchemaPropertyOneOfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserSchemaPropertyOneOf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._const !== undefined) {
      hasAnyValues = true;
      internalValueResult.const = this._const;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSchemaPropertyOneOf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._const = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._const = value.const;
      this._title = value.title;
    }
  }

  // const - computed: false, optional: false, required: true
  private _const?: string; 
  public get const() {
    return this.getStringAttribute('const');
  }
  public set const(value: string) {
    this._const = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constInput() {
    return this._const;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class UserSchemaPropertyOneOfList extends cdktf.ComplexList {
  public internalValue? : UserSchemaPropertyOneOf[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): UserSchemaPropertyOneOfOutputReference {
    return new UserSchemaPropertyOneOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property okta_user_schema_property}
*/
export class UserSchemaProperty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_user_schema_property";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/user_schema_property okta_user_schema_property} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserSchemaPropertyConfig
  */
  public constructor(scope: Construct, id: string, config: UserSchemaPropertyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_user_schema_property',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.36.0',
        providerVersionConstraint: '~> 3.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arrayEnum = config.arrayEnum;
    this._arrayType = config.arrayType;
    this._description = config.description;
    this._enum = config.enum;
    this._externalName = config.externalName;
    this._externalNamespace = config.externalNamespace;
    this._id = config.id;
    this._index = config.index;
    this._master = config.master;
    this._maxLength = config.maxLength;
    this._minLength = config.minLength;
    this._pattern = config.pattern;
    this._permissions = config.permissions;
    this._required = config.required;
    this._scope = config.scope;
    this._title = config.title;
    this._type = config.type;
    this._unique = config.unique;
    this._userType = config.userType;
    this._arrayOneOf.internalValue = config.arrayOneOf;
    this._masterOverridePriority.internalValue = config.masterOverridePriority;
    this._oneOf.internalValue = config.oneOf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array_enum - computed: false, optional: true, required: false
  private _arrayEnum?: string[]; 
  public get arrayEnum() {
    return this.getListAttribute('array_enum');
  }
  public set arrayEnum(value: string[]) {
    this._arrayEnum = value;
  }
  public resetArrayEnum() {
    this._arrayEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayEnumInput() {
    return this._arrayEnum;
  }

  // array_type - computed: false, optional: true, required: false
  private _arrayType?: string; 
  public get arrayType() {
    return this.getStringAttribute('array_type');
  }
  public set arrayType(value: string) {
    this._arrayType = value;
  }
  public resetArrayType() {
    this._arrayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayTypeInput() {
    return this._arrayType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // external_name - computed: false, optional: true, required: false
  private _externalName?: string; 
  public get externalName() {
    return this.getStringAttribute('external_name');
  }
  public set externalName(value: string) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // external_namespace - computed: false, optional: true, required: false
  private _externalNamespace?: string; 
  public get externalNamespace() {
    return this.getStringAttribute('external_namespace');
  }
  public set externalNamespace(value: string) {
    this._externalNamespace = value;
  }
  public resetExternalNamespace() {
    this._externalNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNamespaceInput() {
    return this._externalNamespace;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // master - computed: false, optional: true, required: false
  private _master?: string; 
  public get master() {
    return this.getStringAttribute('master');
  }
  public set master(value: string) {
    this._master = value;
  }
  public resetMaster() {
    this._master = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique - computed: false, optional: true, required: false
  private _unique?: string; 
  public get unique() {
    return this.getStringAttribute('unique');
  }
  public set unique(value: string) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // array_one_of - computed: false, optional: true, required: false
  private _arrayOneOf = new UserSchemaPropertyArrayOneOfList(this, "array_one_of", false);
  public get arrayOneOf() {
    return this._arrayOneOf;
  }
  public putArrayOneOf(value: UserSchemaPropertyArrayOneOf[] | cdktf.IResolvable) {
    this._arrayOneOf.internalValue = value;
  }
  public resetArrayOneOf() {
    this._arrayOneOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayOneOfInput() {
    return this._arrayOneOf.internalValue;
  }

  // master_override_priority - computed: false, optional: true, required: false
  private _masterOverridePriority = new UserSchemaPropertyMasterOverridePriorityList(this, "master_override_priority", false);
  public get masterOverridePriority() {
    return this._masterOverridePriority;
  }
  public putMasterOverridePriority(value: UserSchemaPropertyMasterOverridePriority[] | cdktf.IResolvable) {
    this._masterOverridePriority.internalValue = value;
  }
  public resetMasterOverridePriority() {
    this._masterOverridePriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterOverridePriorityInput() {
    return this._masterOverridePriority.internalValue;
  }

  // one_of - computed: false, optional: true, required: false
  private _oneOf = new UserSchemaPropertyOneOfList(this, "one_of", false);
  public get oneOf() {
    return this._oneOf;
  }
  public putOneOf(value: UserSchemaPropertyOneOf[] | cdktf.IResolvable) {
    this._oneOf.internalValue = value;
  }
  public resetOneOf() {
    this._oneOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneOfInput() {
    return this._oneOf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array_enum: cdktf.listMapper(cdktf.stringToTerraform, false)(this._arrayEnum),
      array_type: cdktf.stringToTerraform(this._arrayType),
      description: cdktf.stringToTerraform(this._description),
      enum: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enum),
      external_name: cdktf.stringToTerraform(this._externalName),
      external_namespace: cdktf.stringToTerraform(this._externalNamespace),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.stringToTerraform(this._index),
      master: cdktf.stringToTerraform(this._master),
      max_length: cdktf.numberToTerraform(this._maxLength),
      min_length: cdktf.numberToTerraform(this._minLength),
      pattern: cdktf.stringToTerraform(this._pattern),
      permissions: cdktf.stringToTerraform(this._permissions),
      required: cdktf.booleanToTerraform(this._required),
      scope: cdktf.stringToTerraform(this._scope),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      unique: cdktf.stringToTerraform(this._unique),
      user_type: cdktf.stringToTerraform(this._userType),
      array_one_of: cdktf.listMapper(userSchemaPropertyArrayOneOfToTerraform, true)(this._arrayOneOf.internalValue),
      master_override_priority: cdktf.listMapper(userSchemaPropertyMasterOverridePriorityToTerraform, true)(this._masterOverridePriority.internalValue),
      one_of: cdktf.listMapper(userSchemaPropertyOneOfToTerraform, true)(this._oneOf.internalValue),
    };
  }
}