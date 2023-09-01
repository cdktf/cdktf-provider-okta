// https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/captcha_org_wide_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CaptchaOrgWideSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the CAPTCHA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/captcha_org_wide_settings#captcha_id CaptchaOrgWideSettings#captcha_id}
  */
  readonly captchaId?: string;
  /**
  * Set of pages that have CAPTCHA enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/captcha_org_wide_settings#enabled_for CaptchaOrgWideSettings#enabled_for}
  */
  readonly enabledFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/captcha_org_wide_settings okta_captcha_org_wide_settings}
*/
export class CaptchaOrgWideSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_captcha_org_wide_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/captcha_org_wide_settings okta_captcha_org_wide_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CaptchaOrgWideSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CaptchaOrgWideSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_captcha_org_wide_settings',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.3.0',
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
    this._captchaId = config.captchaId;
    this._enabledFor = config.enabledFor;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // captcha_id - computed: false, optional: true, required: false
  private _captchaId?: string; 
  public get captchaId() {
    return this.getStringAttribute('captcha_id');
  }
  public set captchaId(value: string) {
    this._captchaId = value;
  }
  public resetCaptchaId() {
    this._captchaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaIdInput() {
    return this._captchaId;
  }

  // enabled_for - computed: false, optional: true, required: false
  private _enabledFor?: string[]; 
  public get enabledFor() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_for'));
  }
  public set enabledFor(value: string[]) {
    this._enabledFor = value;
  }
  public resetEnabledFor() {
    this._enabledFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForInput() {
    return this._enabledFor;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      captcha_id: cdktf.stringToTerraform(this._captchaId),
      enabled_for: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledFor),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
