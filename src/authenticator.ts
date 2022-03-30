// https://www.terraform.io/docs/providers/okta/r/authenticator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable string that identifies the Authenticator
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/authenticator#key Authenticator#key}
  */
  readonly key: string;
  /**
  * Display name of the Authenticator
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/authenticator#name Authenticator#name}
  */
  readonly name: string;
  /**
  * The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/authenticator#provider_auth_port Authenticator#provider_auth_port}
  */
  readonly providerAuthPort?: number;
  /**
  * Server host name or IP address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/authenticator#provider_hostname Authenticator#provider_hostname}
  */
  readonly providerHostname?: string;
  /**
  * An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/authenticator#provider_shared_secret Authenticator#provider_shared_secret}
  */
  readonly providerSharedSecret?: string;
  /**
  * Format expected by the provider
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/authenticator#provider_user_name_template Authenticator#provider_user_name_template}
  */
  readonly providerUserNameTemplate?: string;
  /**
  * Authenticator settings in JSON format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/authenticator#settings Authenticator#settings}
  */
  readonly settings?: string;
  /**
  * Authenticator status: ACTIVE or INACTIVE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/authenticator#status Authenticator#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/authenticator okta_authenticator}
*/
export class Authenticator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_authenticator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/authenticator okta_authenticator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticatorConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticatorConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_authenticator',
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
    this._key = config.key;
    this._name = config.name;
    this._providerAuthPort = config.providerAuthPort;
    this._providerHostname = config.providerHostname;
    this._providerSharedSecret = config.providerSharedSecret;
    this._providerUserNameTemplate = config.providerUserNameTemplate;
    this._settings = config.settings;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider_auth_port - computed: false, optional: true, required: false
  private _providerAuthPort?: number; 
  public get providerAuthPort() {
    return this.getNumberAttribute('provider_auth_port');
  }
  public set providerAuthPort(value: number) {
    this._providerAuthPort = value;
  }
  public resetProviderAuthPort() {
    this._providerAuthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAuthPortInput() {
    return this._providerAuthPort;
  }

  // provider_hostname - computed: false, optional: true, required: false
  private _providerHostname?: string; 
  public get providerHostname() {
    return this.getStringAttribute('provider_hostname');
  }
  public set providerHostname(value: string) {
    this._providerHostname = value;
  }
  public resetProviderHostname() {
    this._providerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerHostnameInput() {
    return this._providerHostname;
  }

  // provider_instance_id - computed: true, optional: false, required: false
  public get providerInstanceId() {
    return this.getStringAttribute('provider_instance_id');
  }

  // provider_shared_secret - computed: false, optional: true, required: false
  private _providerSharedSecret?: string; 
  public get providerSharedSecret() {
    return this.getStringAttribute('provider_shared_secret');
  }
  public set providerSharedSecret(value: string) {
    this._providerSharedSecret = value;
  }
  public resetProviderSharedSecret() {
    this._providerSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerSharedSecretInput() {
    return this._providerSharedSecret;
  }

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }

  // provider_user_name_template - computed: false, optional: true, required: false
  private _providerUserNameTemplate?: string; 
  public get providerUserNameTemplate() {
    return this.getStringAttribute('provider_user_name_template');
  }
  public set providerUserNameTemplate(value: string) {
    this._providerUserNameTemplate = value;
  }
  public resetProviderUserNameTemplate() {
    this._providerUserNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerUserNameTemplateInput() {
    return this._providerUserNameTemplate;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      provider_auth_port: cdktf.numberToTerraform(this._providerAuthPort),
      provider_hostname: cdktf.stringToTerraform(this._providerHostname),
      provider_shared_secret: cdktf.stringToTerraform(this._providerSharedSecret),
      provider_user_name_template: cdktf.stringToTerraform(this._providerUserNameTemplate),
      settings: cdktf.stringToTerraform(this._settings),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
