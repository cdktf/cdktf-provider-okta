// https://www.terraform.io/docs/providers/okta/r/auth_server_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthServerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#auth_server_id AuthServerPolicy#auth_server_id}
  */
  readonly authServerId: string;
  /**
  * Use ["ALL_CLIENTS"] when unsure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#client_whitelist AuthServerPolicy#client_whitelist}
  */
  readonly clientWhitelist: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#description AuthServerPolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#name AuthServerPolicy#name}
  */
  readonly name: string;
  /**
  * Priority of the auth server policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#priority AuthServerPolicy#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#status AuthServerPolicy#status}
  */
  readonly status?: string;
  /**
  * Auth server policy type, unlikely this will be anything other then the default
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy#type AuthServerPolicy#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy okta_auth_server_policy}
*/
export class AuthServerPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_auth_server_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy okta_auth_server_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthServerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AuthServerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_policy',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authServerId = config.authServerId;
    this._clientWhitelist = config.clientWhitelist;
    this._description = config.description;
    this._name = config.name;
    this._priority = config.priority;
    this._status = config.status;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // client_whitelist - computed: false, optional: false, required: true
  private _clientWhitelist?: string[]; 
  public get clientWhitelist() {
    return this.getListAttribute('client_whitelist');
  }
  public set clientWhitelist(value: string[]) {
    this._clientWhitelist = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientWhitelistInput() {
    return this._clientWhitelist;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_server_id: cdktf.stringToTerraform(this._authServerId),
      client_whitelist: cdktf.listMapper(cdktf.stringToTerraform)(this._clientWhitelist),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
