// https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/auth_server_claim_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthServerClaimDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/auth_server_claim_default#always_include_in_token AuthServerClaimDefault#always_include_in_token}
  */
  readonly alwaysIncludeInToken?: boolean | cdktf.IResolvable;
  /**
  * Auth server ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/auth_server_claim_default#auth_server_id AuthServerClaimDefault#auth_server_id}
  */
  readonly authServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/auth_server_claim_default#id AuthServerClaimDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default auth server claim name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/auth_server_claim_default#name AuthServerClaimDefault#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/auth_server_claim_default#value AuthServerClaimDefault#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/auth_server_claim_default okta_auth_server_claim_default}
*/
export class AuthServerClaimDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_auth_server_claim_default";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/auth_server_claim_default okta_auth_server_claim_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthServerClaimDefaultConfig
  */
  public constructor(scope: Construct, id: string, config: AuthServerClaimDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_claim_default',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.4.0',
        providerVersionConstraint: '~> 4.0'
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
    this._id = config.id;
    this._name = config.name;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_include_in_token - computed: true, optional: true, required: false
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

  // claim_type - computed: true, optional: false, required: false
  public get claimType() {
    return this.getStringAttribute('claim_type');
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

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
