// https://www.terraform.io/docs/providers/okta/r/app_saml_app_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppSamlAppSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_saml_app_settings#app_id AppSamlAppSettings#app_id}
  */
  readonly appId: string;
  /**
  * Application settings in JSON format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_saml_app_settings#settings AppSamlAppSettings#settings}
  */
  readonly settings: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_saml_app_settings okta_app_saml_app_settings}
*/
export class AppSamlAppSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_app_saml_app_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/app_saml_app_settings okta_app_saml_app_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppSamlAppSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AppSamlAppSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_saml_app_settings',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appId = config.appId;
    this._settings = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // settings - computed: false, optional: false, required: true
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      settings: cdktf.stringToTerraform(this._settings),
    };
  }
}
