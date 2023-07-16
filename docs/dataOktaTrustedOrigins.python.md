# `data_okta_trusted_origins`

Refer to the Terraform Registory for docs: [`data_okta_trusted_origins`](https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/trusted_origins).

# `dataOktaTrustedOrigins` Submodule <a name="`dataOktaTrustedOrigins` Submodule" id="@cdktf/provider-okta.dataOktaTrustedOrigins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaTrustedOrigins <a name="DataOktaTrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/trusted_origins okta_trusted_origins}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_trusted_origins

dataOktaTrustedOrigins.DataOktaTrustedOrigins(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Filter criteria. Filter value will be URL-encoded by the provider. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.filter"></a>

- *Type:* str

Filter criteria. Filter value will be URL-encoded by the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/trusted_origins#filter DataOktaTrustedOrigins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_trusted_origins

dataOktaTrustedOrigins.DataOktaTrustedOrigins.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_trusted_origins

dataOktaTrustedOrigins.DataOktaTrustedOrigins.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_trusted_origins

dataOktaTrustedOrigins.DataOktaTrustedOrigins.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.trustedOrigins">trusted_origins</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList">DataOktaTrustedOriginsTrustedOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `trusted_origins`<sup>Required</sup> <a name="trusted_origins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.trustedOrigins"></a>

```python
trusted_origins: DataOktaTrustedOriginsTrustedOriginsList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList">DataOktaTrustedOriginsTrustedOriginsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaTrustedOriginsConfig <a name="DataOktaTrustedOriginsConfig" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_trusted_origins

dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.filter">filter</a></code> | <code>str</code> | Filter criteria. Filter value will be URL-encoded by the provider. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Filter criteria. Filter value will be URL-encoded by the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/trusted_origins#filter DataOktaTrustedOrigins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOktaTrustedOriginsTrustedOrigins <a name="DataOktaTrustedOriginsTrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_trusted_origins

dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaTrustedOriginsTrustedOriginsList <a name="DataOktaTrustedOriginsTrustedOriginsList" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_trusted_origins

dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOktaTrustedOriginsTrustedOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOktaTrustedOriginsTrustedOriginsOutputReference <a name="DataOktaTrustedOriginsTrustedOriginsOutputReference" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_trusted_origins

dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins">DataOktaTrustedOriginsTrustedOrigins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.internalValue"></a>

```python
internal_value: DataOktaTrustedOriginsTrustedOrigins
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins">DataOktaTrustedOriginsTrustedOrigins</a>

---



