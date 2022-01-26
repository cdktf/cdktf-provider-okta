// https://www.terraform.io/docs/providers/okta/d/behaviors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaBehaviorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Searches the name property of behaviors for matching value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/behaviors#q DataOktaBehaviors#q}
  */
  readonly q?: string;
}
export class DataOktaBehaviorsBehaviors extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // settings - computed: true, optional: false, required: false
  public get settings() {
    return this.getStringMapAttribute('settings');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/behaviors okta_behaviors}
*/
export class DataOktaBehaviors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_behaviors";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/behaviors okta_behaviors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaBehaviorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaBehaviorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_behaviors',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._q = config.q;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behaviors - computed: true, optional: false, required: false
  public behaviors(index: string) {
    return new DataOktaBehaviorsBehaviors(this, 'behaviors', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      q: cdktf.stringToTerraform(this._q),
    };
  }
}
