// https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/email_customization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaEmailCustomizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Brand ID
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/email_customization#brand_id DataOktaEmailCustomization#brand_id}
  */
  readonly brandId: string;
  /**
  * The ID of the customization
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/email_customization#customization_id DataOktaEmailCustomization#customization_id}
  */
  readonly customizationId: string;
  /**
  * Template Name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/email_customization#template_name DataOktaEmailCustomization#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/email_customization okta_email_customization}
*/
export class DataOktaEmailCustomization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_email_customization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/email_customization okta_email_customization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaEmailCustomizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaEmailCustomizationConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_email_customization',
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
    this._brandId = config.brandId;
    this._customizationId = config.customizationId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // brand_id - computed: false, optional: false, required: true
  private _brandId?: string; 
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }
  public set brandId(value: string) {
    this._brandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandIdInput() {
    return this._brandId;
  }

  // customization_id - computed: false, optional: false, required: true
  private _customizationId?: string; 
  public get customizationId() {
    return this.getStringAttribute('customization_id');
  }
  public set customizationId(value: string) {
    this._customizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationIdInput() {
    return this._customizationId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brand_id: cdktf.stringToTerraform(this._brandId),
      customization_id: cdktf.stringToTerraform(this._customizationId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }
}
