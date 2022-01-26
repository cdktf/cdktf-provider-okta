// https://www.terraform.io/docs/providers/okta/r/template_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#default_language TemplateEmail#default_language}
  */
  readonly defaultLanguage?: string;
  /**
  * Email template type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#type TemplateEmail#type}
  */
  readonly type: string;
  /**
  * translations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#translations TemplateEmail#translations}
  */
  readonly translations: TemplateEmailTranslations[] | cdktf.IResolvable;
}
export interface TemplateEmailTranslations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#language TemplateEmail#language}
  */
  readonly language: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#subject TemplateEmail#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#template TemplateEmail#template}
  */
  readonly template: string;
}

export function templateEmailTranslationsToTerraform(struct?: TemplateEmailTranslations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
    subject: cdktf.stringToTerraform(struct!.subject),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/template_email okta_template_email}
*/
export class TemplateEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_template_email";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/template_email okta_template_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateEmailConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_template_email',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultLanguage = config.defaultLanguage;
    this._type = config.type;
    this._translations = config.translations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_language - computed: false, optional: true, required: false
  private _defaultLanguage?: string; 
  public get defaultLanguage() {
    return this.getStringAttribute('default_language');
  }
  public set defaultLanguage(value: string) {
    this._defaultLanguage = value;
  }
  public resetDefaultLanguage() {
    this._defaultLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageInput() {
    return this._defaultLanguage;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // translations - computed: false, optional: false, required: true
  private _translations?: TemplateEmailTranslations[] | cdktf.IResolvable; 
  public get translations() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('translations')));
  }
  public set translations(value: TemplateEmailTranslations[] | cdktf.IResolvable) {
    this._translations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get translationsInput() {
    return this._translations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_language: cdktf.stringToTerraform(this._defaultLanguage),
      type: cdktf.stringToTerraform(this._type),
      translations: cdktf.listMapper(templateEmailTranslationsToTerraform)(this._translations),
    };
  }
}
