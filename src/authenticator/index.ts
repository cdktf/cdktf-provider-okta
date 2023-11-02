// https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#id Authenticator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A human-readable string that identifies the Authenticator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#key Authenticator#key}
  */
  readonly key: string;
  /**
  * Display name of the Authenticator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#name Authenticator#name}
  */
  readonly name: string;
  /**
  * The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#provider_auth_port Authenticator#provider_auth_port}
  */
  readonly providerAuthPort?: number;
  /**
  * The Duo Security API hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#provider_host Authenticator#provider_host}
  */
  readonly providerHost?: string;
  /**
  * Server host name or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#provider_hostname Authenticator#provider_hostname}
  */
  readonly providerHostname?: string;
  /**
  * The Duo Security integration key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#provider_integration_key Authenticator#provider_integration_key}
  */
  readonly providerIntegrationKey?: string;
  /**
  * Provider in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#provider_json Authenticator#provider_json}
  */
  readonly providerJson?: string;
  /**
  * The Duo Security secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#provider_secret_key Authenticator#provider_secret_key}
  */
  readonly providerSecretKey?: string;
  /**
  * An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#provider_shared_secret Authenticator#provider_shared_secret}
  */
  readonly providerSharedSecret?: string;
  /**
  * Format expected by the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#provider_user_name_template Authenticator#provider_user_name_template}
  */
  readonly providerUserNameTemplate?: string;
  /**
  * Authenticator settings in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#settings Authenticator#settings}
  */
  readonly settings?: string;
  /**
  * Authenticator status: ACTIVE or INACTIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#status Authenticator#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator okta_authenticator}
*/
export class Authenticator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_authenticator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticator to import
  * @param importFromId The id of the existing Authenticator that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_authenticator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/authenticator okta_authenticator} Resource
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
        providerVersion: '4.6.0',
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
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._providerAuthPort = config.providerAuthPort;
    this._providerHost = config.providerHost;
    this._providerHostname = config.providerHostname;
    this._providerIntegrationKey = config.providerIntegrationKey;
    this._providerJson = config.providerJson;
    this._providerSecretKey = config.providerSecretKey;
    this._providerSharedSecret = config.providerSharedSecret;
    this._providerUserNameTemplate = config.providerUserNameTemplate;
    this._settings = config.settings;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // provider_host - computed: false, optional: true, required: false
  private _providerHost?: string; 
  public get providerHost() {
    return this.getStringAttribute('provider_host');
  }
  public set providerHost(value: string) {
    this._providerHost = value;
  }
  public resetProviderHost() {
    this._providerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerHostInput() {
    return this._providerHost;
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

  // provider_integration_key - computed: false, optional: true, required: false
  private _providerIntegrationKey?: string; 
  public get providerIntegrationKey() {
    return this.getStringAttribute('provider_integration_key');
  }
  public set providerIntegrationKey(value: string) {
    this._providerIntegrationKey = value;
  }
  public resetProviderIntegrationKey() {
    this._providerIntegrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIntegrationKeyInput() {
    return this._providerIntegrationKey;
  }

  // provider_json - computed: false, optional: true, required: false
  private _providerJson?: string; 
  public get providerJson() {
    return this.getStringAttribute('provider_json');
  }
  public set providerJson(value: string) {
    this._providerJson = value;
  }
  public resetProviderJson() {
    this._providerJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerJsonInput() {
    return this._providerJson;
  }

  // provider_secret_key - computed: false, optional: true, required: false
  private _providerSecretKey?: string; 
  public get providerSecretKey() {
    return this.getStringAttribute('provider_secret_key');
  }
  public set providerSecretKey(value: string) {
    this._providerSecretKey = value;
  }
  public resetProviderSecretKey() {
    this._providerSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerSecretKeyInput() {
    return this._providerSecretKey;
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
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      provider_auth_port: cdktf.numberToTerraform(this._providerAuthPort),
      provider_host: cdktf.stringToTerraform(this._providerHost),
      provider_hostname: cdktf.stringToTerraform(this._providerHostname),
      provider_integration_key: cdktf.stringToTerraform(this._providerIntegrationKey),
      provider_json: cdktf.stringToTerraform(this._providerJson),
      provider_secret_key: cdktf.stringToTerraform(this._providerSecretKey),
      provider_shared_secret: cdktf.stringToTerraform(this._providerSharedSecret),
      provider_user_name_template: cdktf.stringToTerraform(this._providerUserNameTemplate),
      settings: cdktf.stringToTerraform(this._settings),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
