// https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/brand
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Consent for updating the custom privacy policy URL.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/brand#agree_to_custom_privacy_policy Brand#agree_to_custom_privacy_policy}
  */
  readonly agreeToCustomPrivacyPolicy?: boolean | cdktf.IResolvable;
  /**
  * Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source. Do this by setting brand_id.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/brand#brand_id Brand#brand_id}
  */
  readonly brandId?: string;
  /**
  * Custom privacy policy URL
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/brand#custom_privacy_policy_url Brand#custom_privacy_policy_url}
  */
  readonly customPrivacyPolicyUrl?: string;
  /**
  * Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/brand#remove_powered_by_okta Brand#remove_powered_by_okta}
  */
  readonly removePoweredByOkta?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/brand okta_brand}
*/
export class Brand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_brand";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/brand okta_brand} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrandConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BrandConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_brand',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.0.0',
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
    this._agreeToCustomPrivacyPolicy = config.agreeToCustomPrivacyPolicy;
    this._brandId = config.brandId;
    this._customPrivacyPolicyUrl = config.customPrivacyPolicyUrl;
    this._removePoweredByOkta = config.removePoweredByOkta;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agree_to_custom_privacy_policy - computed: false, optional: true, required: false
  private _agreeToCustomPrivacyPolicy?: boolean | cdktf.IResolvable; 
  public get agreeToCustomPrivacyPolicy() {
    return this.getBooleanAttribute('agree_to_custom_privacy_policy');
  }
  public set agreeToCustomPrivacyPolicy(value: boolean | cdktf.IResolvable) {
    this._agreeToCustomPrivacyPolicy = value;
  }
  public resetAgreeToCustomPrivacyPolicy() {
    this._agreeToCustomPrivacyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreeToCustomPrivacyPolicyInput() {
    return this._agreeToCustomPrivacyPolicy;
  }

  // brand_id - computed: false, optional: true, required: false
  private _brandId?: string; 
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }
  public set brandId(value: string) {
    this._brandId = value;
  }
  public resetBrandId() {
    this._brandId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandIdInput() {
    return this._brandId;
  }

  // custom_privacy_policy_url - computed: false, optional: true, required: false
  private _customPrivacyPolicyUrl?: string; 
  public get customPrivacyPolicyUrl() {
    return this.getStringAttribute('custom_privacy_policy_url');
  }
  public set customPrivacyPolicyUrl(value: string) {
    this._customPrivacyPolicyUrl = value;
  }
  public resetCustomPrivacyPolicyUrl() {
    this._customPrivacyPolicyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPrivacyPolicyUrlInput() {
    return this._customPrivacyPolicyUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // remove_powered_by_okta - computed: false, optional: true, required: false
  private _removePoweredByOkta?: boolean | cdktf.IResolvable; 
  public get removePoweredByOkta() {
    return this.getBooleanAttribute('remove_powered_by_okta');
  }
  public set removePoweredByOkta(value: boolean | cdktf.IResolvable) {
    this._removePoweredByOkta = value;
  }
  public resetRemovePoweredByOkta() {
    this._removePoweredByOkta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePoweredByOktaInput() {
    return this._removePoweredByOkta;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agree_to_custom_privacy_policy: cdktf.booleanToTerraform(this._agreeToCustomPrivacyPolicy),
      brand_id: cdktf.stringToTerraform(this._brandId),
      custom_privacy_policy_url: cdktf.stringToTerraform(this._customPrivacyPolicyUrl),
      remove_powered_by_okta: cdktf.booleanToTerraform(this._removePoweredByOkta),
    };
  }
}
