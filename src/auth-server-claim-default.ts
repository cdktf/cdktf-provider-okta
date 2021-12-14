// https://www.terraform.io/docs/providers/okta/r/auth_server_claim_default.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthServerClaimDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim_default.html#always_include_in_token AuthServerClaimDefault#always_include_in_token}
  */
  readonly alwaysIncludeInToken?: boolean | cdktf.IResolvable;
  /**
  * Auth server ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim_default.html#auth_server_id AuthServerClaimDefault#auth_server_id}
  */
  readonly authServerId: string;
  /**
  * Default auth server claim name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim_default.html#name AuthServerClaimDefault#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim_default.html#value AuthServerClaimDefault#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim_default.html okta_auth_server_claim_default}
*/
export class AuthServerClaimDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_auth_server_claim_default";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/auth_server_claim_default.html okta_auth_server_claim_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthServerClaimDefaultConfig
  */
  public constructor(scope: Construct, id: string, config: AuthServerClaimDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_claim_default',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alwaysIncludeInToken = config.alwaysIncludeInToken;
    this._authServerId = config.authServerId;
    this._name = config.name;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_include_in_token - computed: true, optional: true, required: false
  private _alwaysIncludeInToken?: boolean | cdktf.IResolvable; 
  public get alwaysIncludeInToken() {
    return this.getBooleanAttribute('always_include_in_token') as any;
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

  // claim_type - computed: true, optional: false, required: false
  public get claimType() {
    return this.getStringAttribute('claim_type');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_include_in_token: cdktf.booleanToTerraform(this._alwaysIncludeInToken),
      auth_server_id: cdktf.stringToTerraform(this._authServerId),
      name: cdktf.stringToTerraform(this._name),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
