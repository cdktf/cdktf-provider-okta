// https://www.terraform.io/docs/providers/okta/r/auth_server_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthServerClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#always_include_in_token AuthServerClaim#always_include_in_token}
  */
  readonly alwaysIncludeInToken?: boolean | cdktf.IResolvable;
  /**
  * Auth server ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#auth_server_id AuthServerClaim#auth_server_id}
  */
  readonly authServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#claim_type AuthServerClaim#claim_type}
  */
  readonly claimType: string;
  /**
  * Required when value_type is GROUPS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#group_filter_type AuthServerClaim#group_filter_type}
  */
  readonly groupFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#id AuthServerClaim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Auth server claim name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#name AuthServerClaim#name}
  */
  readonly name: string;
  /**
  * Auth server claim list of scopes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#scopes AuthServerClaim#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#status AuthServerClaim#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#value AuthServerClaim#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim#value_type AuthServerClaim#value_type}
  */
  readonly valueType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim okta_auth_server_claim}
*/
export class AuthServerClaim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_auth_server_claim";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim okta_auth_server_claim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthServerClaimConfig
  */
  public constructor(scope: Construct, id: string, config: AuthServerClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_claim',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.43.0',
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
    this._alwaysIncludeInToken = config.alwaysIncludeInToken;
    this._authServerId = config.authServerId;
    this._claimType = config.claimType;
    this._groupFilterType = config.groupFilterType;
    this._id = config.id;
    this._name = config.name;
    this._scopes = config.scopes;
    this._status = config.status;
    this._value = config.value;
    this._valueType = config.valueType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_include_in_token - computed: false, optional: true, required: false
  private _alwaysIncludeInToken?: boolean | cdktf.IResolvable; 
  public get alwaysIncludeInToken() {
    return this.getBooleanAttribute('always_include_in_token');
  }
  public set alwaysIncludeInToken(value: boolean | cdktf.IResolvable) {
    this._alwaysIncludeInToken = value;
  }
  public resetAlwaysIncludeInToken() {
    this._alwaysIncludeInToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysIncludeInTokenInput() {
    return this._alwaysIncludeInToken;
  }

  // auth_server_id - computed: false, optional: false, required: true
  private _authServerId?: string; 
  public get authServerId() {
    return this.getStringAttribute('auth_server_id');
  }
  public set authServerId(value: string) {
    this._authServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerIdInput() {
    return this._authServerId;
  }

  // claim_type - computed: false, optional: false, required: true
  private _claimType?: string; 
  public get claimType() {
    return this.getStringAttribute('claim_type');
  }
  public set claimType(value: string) {
    this._claimType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimTypeInput() {
    return this._claimType;
  }

  // group_filter_type - computed: false, optional: true, required: false
  private _groupFilterType?: string; 
  public get groupFilterType() {
    return this.getStringAttribute('group_filter_type');
  }
  public set groupFilterType(value: string) {
    this._groupFilterType = value;
  }
  public resetGroupFilterType() {
    this._groupFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterTypeInput() {
    return this._groupFilterType;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_include_in_token: cdktf.booleanToTerraform(this._alwaysIncludeInToken),
      auth_server_id: cdktf.stringToTerraform(this._authServerId),
      claim_type: cdktf.stringToTerraform(this._claimType),
      group_filter_type: cdktf.stringToTerraform(this._groupFilterType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      status: cdktf.stringToTerraform(this._status),
      value: cdktf.stringToTerraform(this._value),
      value_type: cdktf.stringToTerraform(this._valueType),
    };
  }
}
