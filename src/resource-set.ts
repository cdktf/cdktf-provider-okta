// https://www.terraform.io/docs/providers/okta/r/resource_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the Resource Set
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/resource_set.html#description ResourceSet#description}
  */
  readonly description: string;
  /**
  * Unique name given to the Resource Set
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/resource_set.html#label ResourceSet#label}
  */
  readonly label: string;
  /**
  * The endpoints that reference the resources to be included in the new Resource Set
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/resource_set.html#resources ResourceSet#resources}
  */
  readonly resources?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/resource_set.html okta_resource_set}
*/
export class ResourceSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_resource_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/resource_set.html okta_resource_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceSetConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_resource_set',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._label = config.label;
    this._resources = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      label: cdktf.stringToTerraform(this._label),
      resources: cdktf.listMapper(cdktf.stringToTerraform)(this._resources),
    };
  }
}
