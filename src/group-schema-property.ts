// https://www.terraform.io/docs/providers/okta/r/group_schema_property
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupSchemaPropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom Subschema enumerated value of a property of type array.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#array_enum GroupSchemaProperty#array_enum}
  */
  readonly arrayEnum?: string[];
  /**
  * Subschema array type: string, number, integer, reference. Type field must be an array.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#array_type GroupSchemaProperty#array_type}
  */
  readonly arrayType?: string;
  /**
  * Custom Subschema description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#description GroupSchemaProperty#description}
  */
  readonly description?: string;
  /**
  * Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#enum GroupSchemaProperty#enum}
  */
  readonly enum?: string[];
  /**
  * Subschema external name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#external_name GroupSchemaProperty#external_name}
  */
  readonly externalName?: string;
  /**
  * Subschema external namespace
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#external_namespace GroupSchemaProperty#external_namespace}
  */
  readonly externalNamespace?: string;
  /**
  * Subschema unique string identifier
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#index GroupSchemaProperty#index}
  */
  readonly index: string;
  /**
  * SubSchema profile manager, if not set it will inherit its setting.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#master GroupSchemaProperty#master}
  */
  readonly master?: string;
  /**
  * Subschema of type string maximum length
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#max_length GroupSchemaProperty#max_length}
  */
  readonly maxLength?: number;
  /**
  * Subschema of type string minimum length
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#min_length GroupSchemaProperty#min_length}
  */
  readonly minLength?: number;
  /**
  * SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#permissions GroupSchemaProperty#permissions}
  */
  readonly permissions?: string;
  /**
  * Whether the subschema is required
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#required GroupSchemaProperty#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#scope GroupSchemaProperty#scope}
  */
  readonly scope?: string;
  /**
  * Subschema title (display name)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#title GroupSchemaProperty#title}
  */
  readonly title: string;
  /**
  * Subschema type: string, boolean, number, integer, array, or object
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#type GroupSchemaProperty#type}
  */
  readonly type: string;
  /**
  * Subschema unique restriction
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#unique GroupSchemaProperty#unique}
  */
  readonly unique?: string;
  /**
  * array_one_of block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#array_one_of GroupSchemaProperty#array_one_of}
  */
  readonly arrayOneOf?: GroupSchemaPropertyArrayOneOf[] | cdktf.IResolvable;
  /**
  * master_override_priority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#master_override_priority GroupSchemaProperty#master_override_priority}
  */
  readonly masterOverridePriority?: GroupSchemaPropertyMasterOverridePriority[] | cdktf.IResolvable;
  /**
  * one_of block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#one_of GroupSchemaProperty#one_of}
  */
  readonly oneOf?: GroupSchemaPropertyOneOf[] | cdktf.IResolvable;
}
export interface GroupSchemaPropertyArrayOneOf {
  /**
  * Enum value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#const GroupSchemaProperty#const}
  */
  readonly const: string;
  /**
  * Enum title
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#title GroupSchemaProperty#title}
  */
  readonly title: string;
}

export function groupSchemaPropertyArrayOneOfToTerraform(struct?: GroupSchemaPropertyArrayOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    const: cdktf.stringToTerraform(struct!.const),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export interface GroupSchemaPropertyMasterOverridePriority {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#type GroupSchemaProperty#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#value GroupSchemaProperty#value}
  */
  readonly value: string;
}

export function groupSchemaPropertyMasterOverridePriorityToTerraform(struct?: GroupSchemaPropertyMasterOverridePriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface GroupSchemaPropertyOneOf {
  /**
  * Enum value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#const GroupSchemaProperty#const}
  */
  readonly const: string;
  /**
  * Enum title
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property#title GroupSchemaProperty#title}
  */
  readonly title: string;
}

export function groupSchemaPropertyOneOfToTerraform(struct?: GroupSchemaPropertyOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    const: cdktf.stringToTerraform(struct!.const),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property okta_group_schema_property}
*/
export class GroupSchemaProperty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_group_schema_property";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/group_schema_property okta_group_schema_property} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupSchemaPropertyConfig
  */
  public constructor(scope: Construct, id: string, config: GroupSchemaPropertyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group_schema_property',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arrayEnum = config.arrayEnum;
    this._arrayType = config.arrayType;
    this._description = config.description;
    this._enum = config.enum;
    this._externalName = config.externalName;
    this._externalNamespace = config.externalNamespace;
    this._index = config.index;
    this._master = config.master;
    this._maxLength = config.maxLength;
    this._minLength = config.minLength;
    this._permissions = config.permissions;
    this._required = config.required;
    this._scope = config.scope;
    this._title = config.title;
    this._type = config.type;
    this._unique = config.unique;
    this._arrayOneOf = config.arrayOneOf;
    this._masterOverridePriority = config.masterOverridePriority;
    this._oneOf = config.oneOf;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // array_one_of - computed: false, optional: true, required: false
  private _arrayOneOf?: GroupSchemaPropertyArrayOneOf[] | cdktf.IResolvable; 
  public get arrayOneOf() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('array_one_of');
  }
  public set arrayOneOf(value: GroupSchemaPropertyArrayOneOf[] | cdktf.IResolvable) {
    this._arrayOneOf = value;
  }
  public resetArrayOneOf() {
    this._arrayOneOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayOneOfInput() {
    return this._arrayOneOf;
  }

  // master_override_priority - computed: false, optional: true, required: false
  private _masterOverridePriority?: GroupSchemaPropertyMasterOverridePriority[] | cdktf.IResolvable; 
  public get masterOverridePriority() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('master_override_priority');
  }
  public set masterOverridePriority(value: GroupSchemaPropertyMasterOverridePriority[] | cdktf.IResolvable) {
    this._masterOverridePriority = value;
  }
  public resetMasterOverridePriority() {
    this._masterOverridePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterOverridePriorityInput() {
    return this._masterOverridePriority;
  }

  // one_of - computed: false, optional: true, required: false
  private _oneOf?: GroupSchemaPropertyOneOf[] | cdktf.IResolvable; 
  public get oneOf() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('one_of');
  }
  public set oneOf(value: GroupSchemaPropertyOneOf[] | cdktf.IResolvable) {
    this._oneOf = value;
  }
  public resetOneOf() {
    this._oneOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneOfInput() {
    return this._oneOf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array_enum: cdktf.listMapper(cdktf.stringToTerraform)(this._arrayEnum),
      array_type: cdktf.stringToTerraform(this._arrayType),
      description: cdktf.stringToTerraform(this._description),
      enum: cdktf.listMapper(cdktf.stringToTerraform)(this._enum),
      external_name: cdktf.stringToTerraform(this._externalName),
      external_namespace: cdktf.stringToTerraform(this._externalNamespace),
      index: cdktf.stringToTerraform(this._index),
      master: cdktf.stringToTerraform(this._master),
      max_length: cdktf.numberToTerraform(this._maxLength),
      min_length: cdktf.numberToTerraform(this._minLength),
      permissions: cdktf.stringToTerraform(this._permissions),
      required: cdktf.booleanToTerraform(this._required),
      scope: cdktf.stringToTerraform(this._scope),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      unique: cdktf.stringToTerraform(this._unique),
      array_one_of: cdktf.listMapper(groupSchemaPropertyArrayOneOfToTerraform)(this._arrayOneOf),
      master_override_priority: cdktf.listMapper(groupSchemaPropertyMasterOverridePriorityToTerraform)(this._masterOverridePriority),
      one_of: cdktf.listMapper(groupSchemaPropertyOneOfToTerraform)(this._oneOf),
    };
  }
}
