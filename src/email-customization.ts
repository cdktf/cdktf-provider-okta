// https://www.terraform.io/docs/providers/okta/r/email_customization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailCustomizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The body of the customization
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_customization#body EmailCustomization#body}
  */
  readonly body?: string;
  /**
  * Brand ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_customization#brand_id EmailCustomization#brand_id}
  */
  readonly brandId: string;
  /**
  * Whether the customization is the default
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_customization#is_default EmailCustomization#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The language supported by the customization
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_customization#language EmailCustomization#language}
  */
  readonly language?: string;
  /**
  * The subject of the customization
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_customization#subject EmailCustomization#subject}
  */
  readonly subject?: string;
  /**
  * Template Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_customization#template_name EmailCustomization#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/email_customization okta_email_customization}
*/
export class EmailCustomization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_email_customization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/email_customization okta_email_customization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailCustomizationConfig
  */
  public constructor(scope: Construct, id: string, config: EmailCustomizationConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_email_customization',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.32.0',
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
    this._body = config.body;
    this._brandId = config.brandId;
    this._isDefault = config.isDefault;
    this._language = config.language;
    this._subject = config.subject;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
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
      body: cdktf.stringToTerraform(this._body),
      brand_id: cdktf.stringToTerraform(this._brandId),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      language: cdktf.stringToTerraform(this._language),
      subject: cdktf.stringToTerraform(this._subject),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }
}