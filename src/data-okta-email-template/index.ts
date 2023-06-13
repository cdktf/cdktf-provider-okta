// https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/email_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaEmailTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Brand ID
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/email_template#brand_id DataOktaEmailTemplate#brand_id}
  */
  readonly brandId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/email_template#id DataOktaEmailTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the email template
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/email_template#name DataOktaEmailTemplate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/email_template okta_email_template}
*/
export class DataOktaEmailTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_email_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/data-sources/email_template okta_email_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaEmailTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaEmailTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_email_template',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.0.1',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brand_id: cdktf.stringToTerraform(this._brandId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
