// https://www.terraform.io/docs/providers/okta/d/default_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaDefaultPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy type: OKTA_SIGN_ON, PASSWORD, MFA_ENROLL, or IDP_DISCOVERY
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/default_policy.html#type DataOktaDefaultPolicy#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/default_policy.html okta_default_policy}
*/
export class DataOktaDefaultPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_default_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/default_policy.html okta_default_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaDefaultPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaDefaultPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_default_policy',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
