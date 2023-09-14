// https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/brand
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaBrandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Brand ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/brand#brand_id DataOktaBrand#brand_id}
  */
  readonly brandId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/brand okta_brand}
*/
export class DataOktaBrand extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_brand";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/brand okta_brand} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaBrandConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaBrandConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_brand',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.4.2',
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

  // custom_privacy_policy_url - computed: true, optional: false, required: false
  public get customPrivacyPolicyUrl() {
    return this.getStringAttribute('custom_privacy_policy_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remove_powered_by_okta - computed: true, optional: false, required: false
  public get removePoweredByOkta() {
    return this.getBooleanAttribute('remove_powered_by_okta');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brand_id: cdktf.stringToTerraform(this._brandId),
    };
  }
}
